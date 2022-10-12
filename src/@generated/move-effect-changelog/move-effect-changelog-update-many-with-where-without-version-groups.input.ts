import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogScalarWhereInput } from './move-effect-changelog-scalar-where.input';
import { Type } from 'class-transformer';
import { move_effect_changelogUncheckedUpdateManyWithoutMove_effect_changelogInput } from './move-effect-changelog-unchecked-update-many-without-move-effect-changelog.input';

@InputType()
export class move_effect_changelogUpdateManyWithWhereWithoutVersion_groupsInput {

    @Field(() => move_effect_changelogScalarWhereInput, {nullable:false})
    @Type(() => move_effect_changelogScalarWhereInput)
    where!: move_effect_changelogScalarWhereInput;

    @Field(() => move_effect_changelogUncheckedUpdateManyWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effect_changelogUncheckedUpdateManyWithoutMove_effect_changelogInput)
    data!: move_effect_changelogUncheckedUpdateManyWithoutMove_effect_changelogInput;
}
