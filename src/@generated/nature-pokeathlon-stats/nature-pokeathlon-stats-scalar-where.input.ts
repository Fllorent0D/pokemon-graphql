import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class nature_pokeathlon_statsScalarWhereInput {

    @Field(() => [nature_pokeathlon_statsScalarWhereInput], {nullable:true})
    AND?: Array<nature_pokeathlon_statsScalarWhereInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereInput], {nullable:true})
    OR?: Array<nature_pokeathlon_statsScalarWhereInput>;

    @Field(() => [nature_pokeathlon_statsScalarWhereInput], {nullable:true})
    NOT?: Array<nature_pokeathlon_statsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokeathlon_stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_change?: IntFilter;
}
