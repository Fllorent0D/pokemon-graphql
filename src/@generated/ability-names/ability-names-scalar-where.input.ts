import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ability_namesScalarWhereInput {

    @Field(() => [ability_namesScalarWhereInput], {nullable:true})
    AND?: Array<ability_namesScalarWhereInput>;

    @Field(() => [ability_namesScalarWhereInput], {nullable:true})
    OR?: Array<ability_namesScalarWhereInput>;

    @Field(() => [ability_namesScalarWhereInput], {nullable:true})
    NOT?: Array<ability_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ability_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
