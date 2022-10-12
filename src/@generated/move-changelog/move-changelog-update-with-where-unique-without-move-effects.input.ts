import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogUpdateWithoutMove_effectsInput } from './move-changelog-update-without-move-effects.input';

@InputType()
export class move_changelogUpdateWithWhereUniqueWithoutMove_effectsInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogUpdateWithoutMove_effectsInput, {nullable:false})
    @Type(() => move_changelogUpdateWithoutMove_effectsInput)
    data!: move_changelogUpdateWithoutMove_effectsInput;
}
