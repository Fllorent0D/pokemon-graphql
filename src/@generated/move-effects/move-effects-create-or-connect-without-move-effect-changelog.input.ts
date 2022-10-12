import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMove_effect_changelogInput } from './move-effects-create-without-move-effect-changelog.input';

@InputType()
export class move_effectsCreateOrConnectWithoutMove_effect_changelogInput {

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;

    @Field(() => move_effectsCreateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMove_effect_changelogInput)
    create!: move_effectsCreateWithoutMove_effect_changelogInput;
}
