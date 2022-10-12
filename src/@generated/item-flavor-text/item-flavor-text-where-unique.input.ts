import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textItem_idVersion_group_idLanguage_idCompoundUniqueInput } from './item-flavor-text-item-id-version-group-id-language-id-compound-unique.input';

@InputType()
export class item_flavor_textWhereUniqueInput {

    @Field(() => item_flavor_textItem_idVersion_group_idLanguage_idCompoundUniqueInput, {nullable:true})
    item_id_version_group_id_language_id?: item_flavor_textItem_idVersion_group_idLanguage_idCompoundUniqueInput;
}
