import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutColorInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutColorInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutColorInput)
    create!: pokemon_speciesCreateWithoutColorInput;
}
