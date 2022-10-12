import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutEvolution_chainsInput } from './items-create-without-evolution-chains.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutEvolution_chainsInput } from './items-create-or-connect-without-evolution-chains.input';
import { itemsUpsertWithoutEvolution_chainsInput } from './items-upsert-without-evolution-chains.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutEvolution_chainsInput } from './items-update-without-evolution-chains.input';

@InputType()
export class itemsUpdateOneWithoutEvolution_chainsNestedInput {

    @Field(() => itemsCreateWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsCreateWithoutEvolution_chainsInput)
    create?: itemsCreateWithoutEvolution_chainsInput;

    @Field(() => itemsCreateOrConnectWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutEvolution_chainsInput)
    connectOrCreate?: itemsCreateOrConnectWithoutEvolution_chainsInput;

    @Field(() => itemsUpsertWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsUpsertWithoutEvolution_chainsInput)
    upsert?: itemsUpsertWithoutEvolution_chainsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutEvolution_chainsInput, {nullable:true})
    @Type(() => itemsUpdateWithoutEvolution_chainsInput)
    update?: itemsUpdateWithoutEvolution_chainsInput;
}
