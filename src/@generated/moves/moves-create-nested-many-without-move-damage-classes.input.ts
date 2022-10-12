import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class movesCreateNestedManyWithoutMove_damage_classesInput {

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: Array<movesWhereUniqueInput>;
}
