import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class super_contest_effectsCreateNestedOneWithoutSuper_contest_effect_proseInput {

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => super_contest_effectsWhereUniqueInput)
    connect?: super_contest_effectsWhereUniqueInput;
}
