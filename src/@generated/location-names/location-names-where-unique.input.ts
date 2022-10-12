import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesLocation_idLocal_language_idCompoundUniqueInput } from './location-names-location-id-local-language-id-compound-unique.input';

@InputType()
export class location_namesWhereUniqueInput {

    @Field(() => location_namesLocation_idLocal_language_idCompoundUniqueInput, {nullable:true})
    location_id_local_language_id?: location_namesLocation_idLocal_language_idCompoundUniqueInput;
}
