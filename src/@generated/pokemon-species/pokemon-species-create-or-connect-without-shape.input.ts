import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutShapeInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutShapeInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutShapeInput)
    create!: pokemon_speciesCreateWithoutShapeInput;
}
