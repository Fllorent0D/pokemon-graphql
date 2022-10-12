import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class pokeathlon_stat_namesScalarWhereInput {

    @Field(() => [pokeathlon_stat_namesScalarWhereInput], {nullable:true})
    AND?: Array<pokeathlon_stat_namesScalarWhereInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereInput], {nullable:true})
    OR?: Array<pokeathlon_stat_namesScalarWhereInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereInput], {nullable:true})
    NOT?: Array<pokeathlon_stat_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
