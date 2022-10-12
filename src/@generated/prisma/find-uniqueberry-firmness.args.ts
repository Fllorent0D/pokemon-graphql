import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessWhereUniqueInput } from '../berry-firmness/berry-firmness-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueberryFirmnessArgs {

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmnessWhereUniqueInput)
    where!: berry_firmnessWhereUniqueInput;
}
