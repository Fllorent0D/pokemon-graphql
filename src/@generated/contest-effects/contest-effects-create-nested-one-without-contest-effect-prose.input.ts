import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class contest_effectsCreateNestedOneWithoutContest_effect_proseInput {

    @Field(() => contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => contest_effectsWhereUniqueInput)
    connect?: contest_effectsWhereUniqueInput;
}
