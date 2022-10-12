import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessWhereUniqueInput } from '../berry-firmness/berry-firmness-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateInput } from '../berry-firmness/berry-firmness-create.input';
import { berry_firmnessUpdateInput } from '../berry-firmness/berry-firmness-update.input';

@ArgsType()
export class UpsertOneberryFirmnessArgs {

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmnessWhereUniqueInput)
    where!: berry_firmnessWhereUniqueInput;

    @Field(() => berry_firmnessCreateInput, {nullable:false})
    @Type(() => berry_firmnessCreateInput)
    create!: berry_firmnessCreateInput;

    @Field(() => berry_firmnessUpdateInput, {nullable:false})
    @Type(() => berry_firmnessUpdateInput)
    update!: berry_firmnessUpdateInput;
}
