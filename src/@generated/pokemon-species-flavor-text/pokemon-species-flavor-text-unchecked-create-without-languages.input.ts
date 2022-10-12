import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_species_flavor_textUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;
}
