import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateWithoutTypesInput } from './pokemon-types-create-without-types.input';

@InputType()
export class pokemon_typesCreateOrConnectWithoutTypesInput {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;

    @Field(() => pokemon_typesCreateWithoutTypesInput, {nullable:false})
    @Type(() => pokemon_typesCreateWithoutTypesInput)
    create!: pokemon_typesCreateWithoutTypesInput;
}
