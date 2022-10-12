import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateWithoutColorInput } from './pokemon-species-update-without-color.input';
import { pokemon_speciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';

@InputType()
export class pokemon_speciesUpsertWithWhereUniqueWithoutColorInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutColorInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateWithoutColorInput)
    update!: pokemon_speciesUpdateWithoutColorInput;

    @Field(() => pokemon_speciesCreateWithoutColorInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutColorInput)
    create!: pokemon_speciesCreateWithoutColorInput;
}
