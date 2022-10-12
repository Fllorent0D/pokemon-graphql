import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateWithoutVersionsInput } from './pokemon-items-create-without-versions.input';

@InputType()
export class pokemon_itemsCreateOrConnectWithoutVersionsInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_itemsCreateWithoutVersionsInput)
    create!: pokemon_itemsCreateWithoutVersionsInput;
}
