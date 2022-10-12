import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseLocation_area_idLocal_language_idCompoundUniqueInput } from './location-area-prose-location-area-id-local-language-id-compound-unique.input';

@InputType()
export class location_area_proseWhereUniqueInput {

    @Field(() => location_area_proseLocation_area_idLocal_language_idCompoundUniqueInput, {nullable:true})
    location_area_id_local_language_id?: location_area_proseLocation_area_idLocal_language_idCompoundUniqueInput;
}
