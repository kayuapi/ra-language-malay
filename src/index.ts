import { TranslationMessages } from 'ra-core';

const malayMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Tambahkan penapis',
            add: 'Tambahkan',
            back: 'Kembali',
            bulk_actions: '1 benda terpilih |||| %{smart_count} benda terpilih',
            cancel: 'Batal',
            clear_input_value: 'Kosongkan input',
            clone: 'Klon',
            confirm: 'Kesah',
            create: 'Buat',
            delete: 'Padam',
            edit: 'Ubah',
            export: 'Eksport',
            list: 'Senarai',
            refresh: 'Perbaharui',
            remove_filter: 'Padamkan penapis ini',
            remove: 'Padam',
            save: 'Simpan',
            search: 'Cari',
            show: 'Tampil',
            sort: 'Susun',
            undo: 'Buat asal',
            unselect: 'Tidak pilih',
            expand: 'Kembang',
            close: 'Tutup',
            open_menu: 'Buka menu',
            close_menu: 'Tutup menu',
        },
        boolean: {
            true: 'Ya',
            false: 'Tidak',
            null: ' ',
        },
        page: {
            create: 'Buat %{name}',
            dashboard: 'Papan pemuka',
            edit: '%{name} #%{id}',
            error: 'Ada yang salah',
            list: '%{name}',
            loading: 'Pemuatan',
            not_found: 'Tidak ditemukan',
            show: '%{name} #%{id}',
            empty: 'Belum ada %{name}.',
            invite: 'Adakah anda ingin menambah satu?',
        },
        input: {
            file: {
                upload_several:
                    'Letakan beberapa fail untuk dimuat naik, atau klik untuk memilihnya.',
                upload_single: 'Letakan fail untuk dimuat naik, atau klik untuk memilihnya.',
            },
            image: {
                upload_several:
                    'Letakan beberapa gambar untuk dimuat naik, atau klik untuk memilihnya.',
                upload_single:
                    'Letakan gambar untuk dimuat naik, atau klik untuk memilihnya.',
            },
            references: {
                all_missing: 'Tidak dapat menemui data rujukan.',
                many_missing:
                    'Sekurang-kurangnya satu rujukan berkaitan tidak lagi tersedia.',
                single_missing:
                    'Rujukan berkaitan tidak lagi tersedia.',
            },
            password: {
                toggle_visible: 'Sembunyikan kata laluan',
                toggle_hidden: 'Tampilkan kata laluan',
            },
        },
        message: {
            about: 'Tentang',
            are_you_sure: 'Adakah anda yakin?',
            bulk_delete_content:
                'Anda yakin ingin memadam %{name}? |||| Anda yakin ingin memadam %{smart_count} benda ini?',
            bulk_delete_title:
                'Padam %{name} |||| Padam %{smart_count} %{name} benda',
            delete_content: 'Anda yakin ingin memadam benda ini?',
            delete_title: 'Padam %{name} #%{id}',
            details: 'Perincian',
            error:
                "Terjadi kesalahan pada klien dan permintaan anda tidak dapat diselesaikan.",
            invalid_form: 'Borang tidak sah, ada kesalahan. Sila periksa semula.',
            loading: 'Halaman ini sedang memuat, sila tunggu sebentar',
            no: 'Tidak',
            not_found:
                'Sama ada anda menaip URL yang salah, atau anda mengikuti pautan yang salah.',
            yes: 'Ya',
            unsaved_changes:
                "Beberapa perubahan belum anda simpan. Anda yakin ingin mengabaikannya?",
        },
        navigation: {
            no_results: 'Tidak ada hasil yang ditemukan',
            no_more_results:
                'Halaman %{page} tidak wujud. Cuba halaman sebelumnya.',
            page_out_of_boundaries: 'Halaman %{page} tidak wujud',
            page_out_from_end: 'Halaman terakhir',
            page_out_from_begin: 'Halaman pertama',
            page_range_info: '%{offsetBegin}-%{offsetEnd} dari %{total}',
            page_rows_per_page: 'Baris per halaman:',
            next: 'Berikutnya',
            prev: 'Sebelumnya',
        },
        sort: {
            sort_by: 'Susun %{field} %{order}',
            ASC: 'susunan menaik',
            DESC: 'susunan menuruh',
        },
        auth: {
            auth_check_error: 'Sila log masuk untuk melanjutkan',
            user_menu: 'Profil',
            username: 'Nama pengguna',
            password: 'Kata laluan',
            sign_in: 'Log masuk',
            sign_in_error: 'Gagal pengesahan, sila cuba lagi',
            logout: 'Log keluar',
        },
        notification: {
            updated: 'Unsur telah dikemas kini |||| %{smart_count} elemen telah dikemas kini',
            created: 'Unsur telah dibuat',
            deleted: 'Unsur telah dipadam |||| %{smart_count} unsur telah dipadam',
            bad_item: 'Unsur salah',
            item_doesnt_exist: 'Unsur tidak wujud',
            http_error: 'Kesalahan http',
            data_provider_error:
                'Kesalahan pada pembekal data. Periksa konsol untuk maklumat lanjut.',
            i18n_error:
                'Tidak dapat memuat terjemahan untuk bahasa yang ditentukan',
            canceled: 'Telah dibatalkan',
            logged_out: 'Sesi anda telah berakhir, sila sambung kembali.',
        },
        validation: {
            required: 'Wajib',
            minLength: 'Sekurang-kurangnya %{min} watak',
            maxLength: 'Maksimum %{max} watak atau lagi kurang',
            minValue: 'Sekurang-kurangnya %{min}',
            maxValue: 'Maksimum %{max} atau lagi kurang',
            number: 'Angka sahaja',
            email: 'Hanya emel yang sah',
            oneOf: 'Hanya salah satu daripada: %{options}',
            regex: 'Hanya sesuai dengan format tertentu (regexp): %{pattern}',
        },
    },
};

export default malayMessages;
