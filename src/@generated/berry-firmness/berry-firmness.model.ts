import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { berries } from '../berries/berries.model';
import { berry_firmness_names } from '../berry-firmness-names/berry-firmness-names.model';
import { Berry_firmnessCount } from '../prisma/berry-firmness-count.output';

@ObjectType()
export class berry_firmness {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [berries], {nullable:true})
    berries?: Array<berries>;

    @Field(() => [berry_firmness_names], {nullable:true})
    berry_firmness_names?: Array<berry_firmness_names>;

    @Field(() => Berry_firmnessCount, {nullable:false})
    _count?: Berry_firmnessCount;
}
