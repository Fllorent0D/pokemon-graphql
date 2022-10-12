import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesUpdateManyMutationInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesWhereInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where.input';

@ArgsType()
export class UpdateManypokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateManyMutationInput)
    data!: pokeathlon_stat_namesUpdateManyMutationInput;

    @Field(() => pokeathlon_stat_namesWhereInput, {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereInput)
    where?: pokeathlon_stat_namesWhereInput;
}
