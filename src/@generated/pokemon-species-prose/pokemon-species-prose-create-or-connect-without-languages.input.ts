import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateWithoutLanguagesInput } from './pokemon-species-prose-create-without-languages.input';

@InputType()
export class pokemon_species_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_species_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    where!: pokemon_species_proseWhereUniqueInput;

    @Field(() => pokemon_species_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_proseCreateWithoutLanguagesInput)
    create!: pokemon_species_proseCreateWithoutLanguagesInput;
}
