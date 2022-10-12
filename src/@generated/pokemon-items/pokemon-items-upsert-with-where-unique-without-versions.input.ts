import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsUpdateWithoutVersionsInput } from './pokemon-items-update-without-versions.input';
import { pokemon_itemsCreateWithoutVersionsInput } from './pokemon-items-create-without-versions.input';

@InputType()
export class pokemon_itemsUpsertWithWhereUniqueWithoutVersionsInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateWithoutVersionsInput)
    update!: pokemon_itemsUpdateWithoutVersionsInput;

    @Field(() => pokemon_itemsCreateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_itemsCreateWithoutVersionsInput)
    create!: pokemon_itemsCreateWithoutVersionsInput;
}
