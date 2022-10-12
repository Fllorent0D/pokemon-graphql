import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesRegion_idLocal_language_idCompoundUniqueInput } from './region-names-region-id-local-language-id-compound-unique.input';

@InputType()
export class region_namesWhereUniqueInput {

    @Field(() => region_namesRegion_idLocal_language_idCompoundUniqueInput, {nullable:true})
    region_id_local_language_id?: region_namesRegion_idLocal_language_idCompoundUniqueInput;
}
