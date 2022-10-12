import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_typesUpdateWithoutTypesInput } from './pokemon-types-update-without-types.input';

@InputType()
export class pokemon_typesUpdateWithWhereUniqueWithoutTypesInput {

    @Field(() => pokemon_typesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_typesWhereUniqueInput)
    where!: pokemon_typesWhereUniqueInput;

    @Field(() => pokemon_typesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => pokemon_typesUpdateWithoutTypesInput)
    data!: pokemon_typesUpdateWithoutTypesInput;
}
