import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_effect_changelogEffect_idChanged_in_version_group_idCompoundUniqueInput } from './move-effect-changelog-effect-id-changed-in-version-group-id-compound-unique.input';

@InputType()
export class move_effect_changelogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => move_effect_changelogEffect_idChanged_in_version_group_idCompoundUniqueInput, {nullable:true})
    effect_id_changed_in_version_group_id?: move_effect_changelogEffect_idChanged_in_version_group_idCompoundUniqueInput;
}
