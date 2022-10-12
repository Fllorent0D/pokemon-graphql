import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class move_meta_stat_changesScalarWhereInput {

    @Field(() => [move_meta_stat_changesScalarWhereInput], {nullable:true})
    AND?: Array<move_meta_stat_changesScalarWhereInput>;

    @Field(() => [move_meta_stat_changesScalarWhereInput], {nullable:true})
    OR?: Array<move_meta_stat_changesScalarWhereInput>;

    @Field(() => [move_meta_stat_changesScalarWhereInput], {nullable:true})
    NOT?: Array<move_meta_stat_changesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    change?: IntFilter;
}
