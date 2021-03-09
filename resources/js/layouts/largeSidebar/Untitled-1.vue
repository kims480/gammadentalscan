<v-row class="grey lighten-5 mb-3" no-gutters style="height: auto">
      <v-col cols="12">
        <v-card outlined tile class="text-left">
          <v-card-text>
            <!-- <h4 class="card-title mb-3">Basic Tab With Icon</h4> -->
            <ul class="nav nav-tabs" id="myIconTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="contact-icon-tab"
                  data-toggle="tab"
                  href="#contactIcon"
                  role="tab"
                  aria-controls="contactIcon"
                  aria-selected="false"
                  ><i class="nav-icon i-Google-Drive mr-1"></i> G-Drive</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="home-icon-tab"
                  data-toggle="tab"
                  href="#homeIcon"
                  role="tab"
                  aria-controls="homeIcon"
                  aria-selected="true"
                  @click="addFolder = true"
                  ><i class="nav-icon i-Folder-Open mr-1"></i>Folder</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-icon-tab"
                  data-toggle="tab"
                  href="#profileIcon"
                  role="tab"
                  @click="addFiles = true"
                  aria-controls="profileIcon"
                  aria-selected="false"
                  ><i class="nav-icon i-Files mr-1"></i> Files</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myIconTabContent">
              <div
                class="tab-pane fade"
                id="homeIcon"
                role="tabpanel"
                aria-labelledby="home-icon-tab"
              >
                <div class="folder-container-form d-flex align-center">
                  <v-text-field
                    v-model="newFolderName"
                    color="green"
                    class="mr-1"
                    dense
                  >
                    <!-- <v-icon slot="prepend" color="green">mdi-minus</v-icon> -->
                  </v-text-field>

                  <v-btn
                    small
                    text
                    outlined
                    color="indigo"
                    class="ml-auto"
                    @click="searchItem"
                  >
                    Search
                    <v-icon right>mdi-magnify</v-icon>
                  </v-btn>
                  <v-btn
                    small
                    text
                    class="mr-1"
                    outlined
                    color="green"
                    @click="btnAddFolder"
                  >
                    <v-icon left>mdi-folder-plus</v-icon>Create Folder
                  </v-btn>
                </div>
                <template v-if="FOLDER_ARRAY.length > 0">
                  <v-row>
                    <v-col cols="6" class="folder-list d-flex flex-column">
                      <v-radio-group
                        v-model="FOLDER_ID"
                        @change="handleGetFiles(FOLDER_ID)"
                      >
                        <template v-slot:label>
                          <div><strong>Related Folders</strong></div>
                        </template>
                        <v-radio
                          v-for="(folder, index) in FOLDER_ARRAY"
                          :key="index"
                          :value="folder.id"
                        >
                          <template v-slot:label>
                            <div>
                              <v-icon color="amber">mdi-folder-open</v-icon>
                              <strong class="success--text">{{
                                folder.title
                              }}</strong>
                            </div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="6" class="folder-list d-flex flex-column">
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="handleGetFiles(FOLDER_ID)"
                      >
                        <v-icon left>mdi-file-search</v-icon>Check Files
                      </v-btn>
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="saveFiles"
                      >
                        <v-icon left>mdi-file-cloud</v-icon>Save Files
                      </v-btn>
                      <v-btn
                        small
                        text
                        class="mr-1"
                        outlined
                        color="green"
                        @click="getSavedFiles"
                      >
                        <v-icon left>mdi-file-cloud</v-icon>Get Files
                      </v-btn>
                      <v-combobox
                        v-model="fileCateg"
                        :items="fileCategItems"
                        label="File Category"
                        item-text="categ_name"
                        return-object
                        dense
                        outlined
                        small-chips
                      ></v-combobox>

                      <div
                        class="d-flex align-center justify-between"
                        v-for="(file, index) in RequestFiles"
                        :key="index"
                      >
                        <v-checkbox
                          v-model="selectedRequestFiles"
                          :value="{ id: file.id, name: file.title }"
                        >
                          <template v-slot:label>
                            <div>
                              <img
                                v-if="file.fileExtension"
                                alt="Avatar"
                                :src="
                                  './../../../images/' +
                                  file.fileExtension +
                                  '-icon.png'
                                "
                                height="28px"
                                width="28px"
                              />
                              <v-icon
                                v-else
                                color="green"
                                v-text="File"
                              ></v-icon>

                              {{ file.title }}
                            </div>
                          </template>
                        </v-checkbox>
                        <div class="d-inline-flex">
                          <a
                            :href="
                              'https://drive.google.com/uc?id=' +
                              file.id +
                              '&export=download'
                            "
                            target="blank"
                            >download</a
                          >

                          <a
                            :href="
                              'https://drive.google.com/file/d/' +
                              file.id +
                              '/preview?usp=drivesdk'
                            "
                            target="blank"
                            >View</a
                          >
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </template>
                <template v-else>
                  <div><strong>Related Folders</strong></div>
                  <div>no related folders available</div>
                </template>
              </div>
              <div
                class="tab-pane fade"
                id="profileIcon"
                role="tabpanel"
                aria-labelledby="profile-icon-tab"
              >
                <template v-if="addFiles">
                  <v-card>
                    <v-card-text>
                      <v-combobox
                        v-model="fileCateg"
                        :items="fileCategItems"
                        label="File Category"
                        item-text="categ_name"
                        return-object
                        dense
                        outlined
                        small-chips
                      ></v-combobox>
                      <v-file-input
                        v-model="files"
                        color="light-green accent-4"
                        counter
                        clearable
                        dense
                        outlined
                        v-if="addFiles"
                        label="Add Files"
                        multiple
                        placeholder="Select your files"
                        prepend-icon="mdi-paperclip"
                        :show-size="1000"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 3"
                            color="green accent-4"
                            dark
                            label
                            small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                            v-else-if="index === 3"
                            class="overline grey--text text--darken-3 mx-2"
                          >
                            +{{ files.length - 3 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </v-card-text>
                    <v-card-actions class="d-flex align-center justify-end">
                      <!-- upload -->
                      <v-btn
                        class="ma-2 white--text upload-btn"
                        depressed
                        :disabled="files.length == 0"
                        color="blue-grey"
                        @click="workerfUpload"
                      >
                        Upload
                        <v-icon right>mdi-cloud-upload</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </div>
              <div
                class="tab-pane fade show active"
                id="contactIcon"
                role="tabpanel"
                aria-labelledby="contact-icon-tab"
              >
                <v-btn
                  color="green lighten-5 "
                  v-show="notSignedIn"
                  light
                  @click="handleAuthClick()"
                >
                  <v-icon left>mdi-login-variant</v-icon> Sign In
                </v-btn>
                <v-card class="pa-2 text-green" outlined tile>
                  You Aleady Signed In
                </v-card>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
