import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereInput)
    where?: pokeathlon_stat_namesWhereInput;
}
