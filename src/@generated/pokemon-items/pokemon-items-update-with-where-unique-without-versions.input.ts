import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsUpdateWithoutVersionsInput } from './pokemon-items-update-without-versions.input';

@InputType()
export class pokemon_itemsUpdateWithWhereUniqueWithoutVersionsInput {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateWithoutVersionsInput)
    data!: pokemon_itemsUpdateWithoutVersionsInput;
}
