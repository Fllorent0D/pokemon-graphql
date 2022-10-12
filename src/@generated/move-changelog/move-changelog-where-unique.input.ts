import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogMove_idChanged_in_version_group_idCompoundUniqueInput } from './move-changelog-move-id-changed-in-version-group-id-compound-unique.input';

@InputType()
export class move_changelogWhereUniqueInput {

    @Field(() => move_changelogMove_idChanged_in_version_group_idCompoundUniqueInput, {nullable:true})
    move_id_changed_in_version_group_id?: move_changelogMove_idChanged_in_version_group_idCompoundUniqueInput;
}
