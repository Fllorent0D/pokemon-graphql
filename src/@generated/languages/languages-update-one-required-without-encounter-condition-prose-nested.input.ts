import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEncounter_condition_proseInput } from './languages-create-without-encounter-condition-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEncounter_condition_proseInput } from './languages-create-or-connect-without-encounter-condition-prose.input';
import { languagesUpsertWithoutEncounter_condition_proseInput } from './languages-upsert-without-encounter-condition-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutEncounter_condition_proseInput } from './languages-update-without-encounter-condition-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutEncounter_condition_proseNestedInput {

    @Field(() => languagesCreateWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEncounter_condition_proseInput)
    create?: languagesCreateWithoutEncounter_condition_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEncounter_condition_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEncounter_condition_proseInput;

    @Field(() => languagesUpsertWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutEncounter_condition_proseInput)
    upsert?: languagesUpsertWithoutEncounter_condition_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutEncounter_condition_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutEncounter_condition_proseInput)
    update?: languagesUpdateWithoutEncounter_condition_proseInput;
}
