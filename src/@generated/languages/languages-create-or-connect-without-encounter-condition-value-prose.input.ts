import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEncounter_condition_value_proseInput } from './languages-create-without-encounter-condition-value-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutEncounter_condition_value_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutEncounter_condition_value_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEncounter_condition_value_proseInput)
    create!: languagesCreateWithoutEncounter_condition_value_proseInput;
}
