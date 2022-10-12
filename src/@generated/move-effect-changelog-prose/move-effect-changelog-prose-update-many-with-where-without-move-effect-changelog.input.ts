import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelog_proseScalarWhereInput } from './move-effect-changelog-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelog_proseUpdateManyMutationInput } from './move-effect-changelog-prose-update-many-mutation.input';

@InputType()
export class move_effect_changelog_proseUpdateManyWithWhereWithoutMove_effect_changelogInput {

    @Field(() => move_effect_changelog_proseScalarWhereInput, {nullable:false})
    @Type(() => move_effect_changelog_proseScalarWhereInput)
    where!: move_effect_changelog_proseScalarWhereInput;

    @Field(() => move_effect_changelog_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_effect_changelog_proseUpdateManyMutationInput)
    data!: move_effect_changelog_proseUpdateManyMutationInput;
}
