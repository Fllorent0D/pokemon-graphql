import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class move_namesScalarWhereInput {

    @Field(() => [move_namesScalarWhereInput], {nullable:true})
    AND?: Array<move_namesScalarWhereInput>;

    @Field(() => [move_namesScalarWhereInput], {nullable:true})
    OR?: Array<move_namesScalarWhereInput>;

    @Field(() => [move_namesScalarWhereInput], {nullable:true})
    NOT?: Array<move_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
