import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textMove_idVersion_group_idLanguage_idCompoundUniqueInput } from './move-flavor-text-move-id-version-group-id-language-id-compound-unique.input';

@InputType()
export class move_flavor_textWhereUniqueInput {

    @Field(() => move_flavor_textMove_idVersion_group_idLanguage_idCompoundUniqueInput, {nullable:true})
    move_id_version_group_id_language_id?: move_flavor_textMove_idVersion_group_idLanguage_idCompoundUniqueInput;
}
