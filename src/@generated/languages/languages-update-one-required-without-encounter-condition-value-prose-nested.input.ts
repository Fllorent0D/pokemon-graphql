import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEncounter_condition_value_proseInput } from './languages-create-without-encounter-condition-value-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEncounter_condition_value_proseInput } from './languages-create-or-connect-without-encounter-condition-value-prose.input';
import { languagesUpsertWithoutEncounter_condition_value_proseInput } from './languages-upsert-without-encounter-condition-value-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutEncounter_condition_value_proseInput } from './languages-update-without-encounter-condition-value-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutEncounter_condition_value_proseNestedInput {

    @Field(() => languagesCreateWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEncounter_condition_value_proseInput)
    create?: languagesCreateWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEncounter_condition_value_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesUpsertWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutEncounter_condition_value_proseInput)
    upsert?: languagesUpsertWithoutEncounter_condition_value_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutEncounter_condition_value_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutEncounter_condition_value_proseInput)
    update?: languagesUpdateWithoutEncounter_condition_value_proseInput;
}
