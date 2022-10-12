import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_changelogCreateWithoutMove_effectsInput } from './move-changelog-create-without-move-effects.input';

@InputType()
export class move_changelogCreateOrConnectWithoutMove_effectsInput {

    @Field(() => move_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_changelogWhereUniqueInput)
    where!: move_changelogWhereUniqueInput;

    @Field(() => move_changelogCreateWithoutMove_effectsInput, {nullable:false})
    @Type(() => move_changelogCreateWithoutMove_effectsInput)
    create!: move_changelogCreateWithoutMove_effectsInput;
}
