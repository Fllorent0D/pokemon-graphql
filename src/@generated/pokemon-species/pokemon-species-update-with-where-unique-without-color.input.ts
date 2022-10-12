import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutColorInput } from './pokemon-species-update-without-color.input';

@InputType()
export class pokemon_speciesUpdateWithWhereUniqueWithoutColorInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutColorInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutColorInput)
    data!: pokemon_speciesUpdateWithoutColorInput;
}
