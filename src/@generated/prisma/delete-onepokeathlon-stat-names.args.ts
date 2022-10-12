import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereUniqueInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;
}
