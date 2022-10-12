import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutShapeInput } from './pokemon-species-update-without-shape.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutShapeInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutShapeInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutShapeInput)
    data!: pokemon_speciesUpdateWithoutShapeInput;
}
