import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_changelogWhereUniqueInput } from './move-effect-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { move_effect_changelogCreateWithoutMove_effectsInput } from './move-effect-changelog-create-without-move-effects.input';

@InputType()
export class move_effect_changelogCreateOrConnectWithoutMove_effectsInput {

    @Field(() => move_effect_changelogWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_changelogWhereUniqueInput)
    where!: move_effect_changelogWhereUniqueInput;

    @Field(() => move_effect_changelogCreateWithoutMove_effectsInput, {nullable:false})
    @Type(() => move_effect_changelogCreateWithoutMove_effectsInput)
    create!: move_effect_changelogCreateWithoutMove_effectsInput;
}
