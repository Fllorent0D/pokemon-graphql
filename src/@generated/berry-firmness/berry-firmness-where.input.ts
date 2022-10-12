import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BerriesListRelationFilter } from '../prisma/berries-list-relation-filter.input';
import { Berry_firmness_namesListRelationFilter } from '../prisma/berry-firmness-names-list-relation-filter.input';

@InputType()
export class berry_firmnessWhereInput {

    @Field(() => [berry_firmnessWhereInput], {nullable:true})
    AND?: Array<berry_firmnessWhereInput>;

    @Field(() => [berry_firmnessWhereInput], {nullable:true})
    OR?: Array<berry_firmnessWhereInput>;

    @Field(() => [berry_firmnessWhereInput], {nullable:true})
    NOT?: Array<berry_firmnessWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: BerriesListRelationFilter;

    @Field(() => Berry_firmness_namesListRelationFilter, {nullable:true})
    berry_firmness_names?: Berry_firmness_namesListRelationFilter;
}
