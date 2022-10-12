import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesCreateInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesCreateInput)
    data!: pokeathlon_stat_namesCreateInput;
}
