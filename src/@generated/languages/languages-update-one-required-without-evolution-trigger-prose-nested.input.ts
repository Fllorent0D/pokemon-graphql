import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutEvolution_trigger_proseInput } from './languages-create-without-evolution-trigger-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutEvolution_trigger_proseInput } from './languages-create-or-connect-without-evolution-trigger-prose.input';
import { languagesUpsertWithoutEvolution_trigger_proseInput } from './languages-upsert-without-evolution-trigger-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutEvolution_trigger_proseInput } from './languages-update-without-evolution-trigger-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutEvolution_trigger_proseNestedInput {

    @Field(() => languagesCreateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutEvolution_trigger_proseInput)
    create?: languagesCreateWithoutEvolution_trigger_proseInput;

    @Field(() => languagesCreateOrConnectWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutEvolution_trigger_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutEvolution_trigger_proseInput;

    @Field(() => languagesUpsertWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutEvolution_trigger_proseInput)
    upsert?: languagesUpsertWithoutEvolution_trigger_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutEvolution_trigger_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutEvolution_trigger_proseInput)
    update?: languagesUpdateWithoutEvolution_trigger_proseInput;
}
