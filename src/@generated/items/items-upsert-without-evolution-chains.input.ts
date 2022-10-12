import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutEvolution_chainsInput } from './items-update-without-evolution-chains.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutEvolution_chainsInput } from './items-create-without-evolution-chains.input';

@InputType()
export class itemsUpsertWithoutEvolution_chainsInput {

    @Field(() => itemsUpdateWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => itemsUpdateWithoutEvolution_chainsInput)
    update!: itemsUpdateWithoutEvolution_chainsInput;

    @Field(() => itemsCreateWithoutEvolution_chainsInput, {nullable:false})
    @Type(() => itemsCreateWithoutEvolution_chainsInput)
    create!: itemsCreateWithoutEvolution_chainsInput;
}
