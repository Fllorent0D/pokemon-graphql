import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_egg_groupsUncheckedCreateWithoutEgg_groupsInput {

    @Field(() => Int, {nullable:false})
    species_id!: number;
}
