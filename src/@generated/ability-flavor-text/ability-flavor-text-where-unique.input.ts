import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_flavor_textAbility_idVersion_group_idLanguage_idCompoundUniqueInput } from './ability-flavor-text-ability-id-version-group-id-language-id-compound-unique.input';

@InputType()
export class ability_flavor_textWhereUniqueInput {

    @Field(() => ability_flavor_textAbility_idVersion_group_idLanguage_idCompoundUniqueInput, {nullable:true})
    ability_id_version_group_id_language_id?: ability_flavor_textAbility_idVersion_group_idLanguage_idCompoundUniqueInput;
}
