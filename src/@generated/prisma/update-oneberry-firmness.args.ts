import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessUpdateInput } from '../berry-firmness/berry-firmness-update.input';
import { Type } from 'class-transformer';
import { berry_firmnessWhereUniqueInput } from '../berry-firmness/berry-firmness-where-unique.input';

@ArgsType()
export class UpdateOneberryFirmnessArgs {

    @Field(() => berry_firmnessUpdateInput, {nullable:false})
    @Type(() => berry_firmnessUpdateInput)
    data!: berry_firmnessUpdateInput;

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmnessWhereUniqueInput)
    where!: berry_firmnessWhereUniqueInput;
}
