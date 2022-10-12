import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutPokemon_typesInput } from './types-create-without-pokemon-types.input';

@InputType()
export class typesCreateOrConnectWithoutPokemon_typesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutPokemon_typesInput, {nullable:false})
    @Type(() => typesCreateWithoutPokemon_typesInput)
    create!: typesCreateWithoutPokemon_typesInput;
}
